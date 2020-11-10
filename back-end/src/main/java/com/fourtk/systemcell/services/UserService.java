package com.fourtk.systemcell.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fourtk.systemcell.dto.RoleDTO;
import com.fourtk.systemcell.dto.UserDTO;
import com.fourtk.systemcell.dto.UserInsertDTO;
import com.fourtk.systemcell.dto.UserUpdateDTO;
import com.fourtk.systemcell.entities.Role;
import com.fourtk.systemcell.entities.User;
import com.fourtk.systemcell.repositories.RoleRepository;
import com.fourtk.systemcell.repositories.UserRepository;
import com.fourtk.systemcell.services.exceptions.DataBaseException;
import com.fourtk.systemcell.services.exceptions.ResourcesNotFoundException;

@Service
public class UserService implements UserDetailsService {
	
	private static Logger logger = org.slf4j.LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private AuthService authService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(PageRequest pageRequest){
		
		Page<User> list = repository.findAll(pageRequest);
		return  list.map(x -> new UserDTO(x));	
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		
		authService.validateSelfOrAdmin(id);
		
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourcesNotFoundException("Categoria não Encontrada"));
		
		return new UserDTO(entity);	
	}	
		
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);		
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		
		try {
			User entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);			
			return new UserDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourcesNotFoundException("Id Não encontrado" + id);
		}
		
	}
	
	public void delete(Long id) {
		
		try {
		repository.deleteById(id);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourcesNotFoundException("ID not found " + id);
		}
		catch (DataIntegrityViolationException e) {
			throw new DataBaseException("Integrity Violation");  
		}
	}
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {		
	
		User user = repository.findByEmail(username);
		if (user == null) {
			logger.error("User not Found: " + username);
			throw new UsernameNotFoundException("Email não encontrado!");
		}
			logger.info("user found: " + username);
		return user;
	}
	
	private void copyDtoToEntity(UserDTO dto, User entity) {
		
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setGenre(dto.getGenre());
		entity.setAddress(dto.getAddress());
		entity.setNumber(dto.getNumber());
		entity.setBairro(dto.getBairro());
		entity.setCity(dto.getCity());
		entity.setTelCelular(dto.getTelCelular());
		entity.setTelFixo(dto.getTelFixo());
		entity.setImgUrl(dto.getImgUrl());
		
		
		entity.getRoles().clear();
		for (RoleDTO roleDTO : dto.getRoles()) {
			Role role = roleRepository.getOne(roleDTO.getId());
			entity.getRoles().add(role);
		}
		
	}
}

package com.fourtk.systemcell.services;

import java.util.Optional;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fourtk.systemcell.dto.UserDTO;
import com.fourtk.systemcell.entities.User;
import com.fourtk.systemcell.repositories.UserRepository;
import com.fourtk.systemcell.services.exceptions.ResourcesNotFoundException;

@Service
public class UserService implements UserDetailsService {
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourcesNotFoundException("Categoria não Encontrada"));
		
		return new UserDTO(entity);
		
	}

	@Autowired
	private UserRepository repository;
	
	private static Logger logger = org.slf4j.LoggerFactory.getLogger(UserService.class);
	
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


}

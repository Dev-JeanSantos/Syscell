package com.fourtk.systemcell.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fourtk.systemcell.dto.CellDTO;
import com.fourtk.systemcell.dto.UserDTO;
import com.fourtk.systemcell.entities.Cell;
import com.fourtk.systemcell.entities.User;
import com.fourtk.systemcell.repositories.CellRepository;
import com.fourtk.systemcell.repositories.UserRepository;
import com.fourtk.systemcell.services.exceptions.DataBaseException;
import com.fourtk.systemcell.services.exceptions.ResourcesNotFoundException;

@Service
public class CellService {
	@Autowired
	private CellRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthService authService;
	
	@Transactional(readOnly = true)
	public Page<CellDTO> findAllPaged(PageRequest pageRequest){
		
		Page<Cell> list = repository.findAll(pageRequest);
		return  list.map(x -> new CellDTO(x));	
	}
	
	@Transactional(readOnly = true)
	public CellDTO findById(Long id) {
		
		authService.validateSelfOrAdmin(id);
		
		Optional<Cell> obj = repository.findById(id);
		Cell entity = obj.orElseThrow(() -> new ResourcesNotFoundException("Celula não Encontrada"));
		
		return new CellDTO(entity, entity.getUsers());
	}	
		
	@Transactional
	public CellDTO insert(CellDTO dto) {		
		Cell entity = new Cell();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);		
		return new CellDTO(entity);
	}
	
	@Transactional
	public CellDTO update(Long id, CellDTO dto) {
		try {
			Cell entity = repository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = repository.save(entity);			
			return new CellDTO(entity);
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
	
	private void copyDtoToEntity(CellDTO dto, Cell entity) {		
		entity.setName(dto.getName());
		entity.setLeader(dto.getLeader());
		entity.setHost(dto.getHost());
		entity.setAddress(dto.getAddress());
		entity.setTelCelular(dto.getTelCelular());
		entity.setStartMoment(dto.getStartMoment());
		entity.setEndMoment(dto.getEndMoment());
		
		entity.getUsers().clear();
		for (UserDTO userDTO : dto.getUsers()) {
			User user = userRepository.getOne(userDTO.getId());
			entity.getUsers().add(user);
		}		
	}
}



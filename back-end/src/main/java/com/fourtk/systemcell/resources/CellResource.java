package com.fourtk.systemcell.resources;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fourtk.systemcell.dto.CellDTO;
import com.fourtk.systemcell.services.CellService;

@RestController
@RequestMapping(value = "/cells")
public class CellResource {
	
	@Autowired
	private CellService service;
	
	@GetMapping
	public ResponseEntity<Page<CellDTO>> findAllPaged(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "Id") String orderBy			
			){		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage,Direction.valueOf(direction), orderBy );
		Page<CellDTO> list = service.findAllPaged(pageRequest);		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<CellDTO> findById(@PathVariable Long id) {
		CellDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<CellDTO> insert(@Valid @RequestBody CellDTO dto){
		CellDTO userdto = service.insert(dto);	
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(userdto.getId()).toUri();
		
		return ResponseEntity.created(uri).body(userdto);
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<CellDTO> update(@PathVariable Long id, @Valid @RequestBody CellDTO dto){
		CellDTO newdto = service.update(id, dto);
		return ResponseEntity.ok().body(newdto);	
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<CellDTO> delete(@PathVariable Long id){
		service.delete(id);		
		return ResponseEntity.noContent().build();
	}
}

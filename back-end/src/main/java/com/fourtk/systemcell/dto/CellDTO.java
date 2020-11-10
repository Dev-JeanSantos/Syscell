package com.fourtk.systemcell.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.fourtk.systemcell.entities.Cell;
import com.fourtk.systemcell.entities.User;

public class CellDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String leader;
	private String host;
	private String address;
	private String telCelular;
	private Instant startMoment;
	private Instant endMoment;
	
	private List<UserDTO> users = new ArrayList<>();
	
	public CellDTO() {
		// TODO Auto-generated constructor stub
	}

	public CellDTO(Long id, String name, String leader, String host, String address, String telCelular,
			Instant startMoment, Instant endMoment) {
		this.id = id;
		this.name = name;
		this.leader = leader;
		this.host = host;
		this.address = address;
		this.telCelular = telCelular;
		this.startMoment = startMoment;
		this.endMoment = endMoment;
	}
	
	public CellDTO(Cell entity) {
		id = entity.getId();
		name = entity.getName();
		leader = entity.getLeader();
		host = entity.getHost();
		address = entity.getAddress();
		telCelular = entity.getTelCelular();
		startMoment = entity.getStartMoment();
		endMoment = entity.getEndMoment();
	}
	
	public CellDTO(Cell entity, Set<User> users) {
			this(entity);
			users.forEach(us -> this.users.add(new UserDTO(us)));		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLeader() {
		return leader;
	}

	public void setLeader(String leader) {
		this.leader = leader;
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTelCelular() {
		return telCelular;
	}

	public void setTelCelular(String telCelular) {
		this.telCelular = telCelular;
	}

	public Instant getStartMoment() {
		return startMoment;
	}

	public void setStartMoment(Instant startMoment) {
		this.startMoment = startMoment;
	}

	public Instant getEndMoment() {
		return endMoment;
	}

	public void setEndMoment(Instant endMoment) {
		this.endMoment = endMoment;
	}

	public List<UserDTO> getUsers() {
		return users;
	}	
}

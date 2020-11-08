package com.fourtk.systemcell.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_cell")
public class Cell implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String leader;
	private String host;
	private String address;
	private String telCelular;
	private Instant startMoment;
	private Instant endMoment;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable( name = "tb_study_cell",
			joinColumns = @JoinColumn(name = "cell_id"),
			inverseJoinColumns = @JoinColumn(name = "study_id"))
	private Set<Study> studys = new HashSet<>();
	
	
	@ManyToOne
	@JoinColumn(name = "church_id")
	private Church church;
	
	@OneToMany(mappedBy = "cell")
	private List<User> users = new ArrayList<>();
	
	public Cell() {
		// TODO Auto-generated constructor stub
	}

	public Cell(Long id, String name, String leader, String host, String address, String telCelular,
			Instant startMoment, Instant endMoment, Church church) {
		super();
		this.id = id;
		this.name = name;
		this.leader = leader;
		this.host = host;
		this.address = address;
		this.telCelular = telCelular;
		this.startMoment = startMoment;
		this.endMoment = endMoment;
		this.church = church;
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

	public Church getChurch() {
		return church;
	}

	public void setChurch(Church church) {
		this.church = church;
	}
	
	public List<User> getUsers() {
		return users;
	}

	public Set<Study> getStudys() {
		return studys;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Cell other = (Cell) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}	
	
}

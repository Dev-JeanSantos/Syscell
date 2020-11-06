package com.fourtk.systemcell.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String password;
	private String genre;
	private String address;
	private Integer number;
	private String bairro;
	private String city;
	private String telFixo;
	private String telCelular;
	private String imgUrl;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable( name = "tb_user_role",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	
	
	public User() {
		// TODO Auto-generated constructor stub
	}


	public User(Long id, String name, String email, String password, String genre, String address, Integer number,
			String bairro, String city, String telFixo, String telCelular, String imgUrl, Set<Role> roles) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.genre = genre;
		this.address = address;
		this.number = number;
		this.bairro = bairro;
		this.city = city;
		this.telFixo = telFixo;
		this.telCelular = telCelular;
		this.imgUrl = imgUrl;
		this.roles = roles;
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getSexo() {
		return genre;
	}


	public void setSexo(String genre) {
		this.genre = genre;
	}


	public String getEndereco() {
		return address;
	}


	public void setEndereco(String address) {
		this.address = address;
	}


	public Integer getNumero() {
		return number;
	}


	public void setNumero(Integer number) {
		this.number = number;
	}


	public String getBairro() {
		return bairro;
	}


	public void setBairro(String bairro) {
		this.bairro = bairro;
	}


	public String getCidade() {
		return city;
	}


	public void setCidade(String city) {
		this.city = city;
	}


	public String getTelFixo() {
		return telFixo;
	}


	public void setTelFixo(String telFixo) {
		this.telFixo = telFixo;
	}


	public String getTelCelular() {
		return telCelular;
	}


	public void setTelCelular(String telCelular) {
		this.telCelular = telCelular;
	}


	public String getImgUrl() {
		return imgUrl;
	}


	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}


	public Set<Role> getRoles() {
		return roles;
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
		User other = (User) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}

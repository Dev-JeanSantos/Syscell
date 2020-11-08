package com.fourtk.systemcell.dto;

import java.io.Serializable;

import com.fourtk.systemcell.entities.User;

public class UserDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String email;
	private String genre;
	private String address;
	private Integer number;
	private String bairro;
	private String city;
	private String telFixo;
	private String telCelular;
	private String imgUrl;
	
	UserDTO(){
		
	}

	public UserDTO(Long id, String name, String email, String genre, String address, Integer number,
			String bairro, String city, String telFixo, String telCelular, String imgUrl) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.genre = genre;
		this.address = address;
		this.number = number;
		this.bairro = bairro;
		this.city = city;
		this.telFixo = telFixo;
		this.telCelular = telCelular;
		this.imgUrl = imgUrl;
	}
	
	public UserDTO( User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		genre = entity.getGenre();
		address = entity.getAddress();
		number = entity.getNumber();
		bairro = entity.getBairro();
		city = entity.getCity();
		telFixo = entity.getTelFixo();		
		telCelular = entity.getTelCelular();
		imgUrl = entity.getImgUrl();
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

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
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
}

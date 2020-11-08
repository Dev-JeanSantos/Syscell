package com.fourtk.systemcell.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fourtk.systemcell.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);

}

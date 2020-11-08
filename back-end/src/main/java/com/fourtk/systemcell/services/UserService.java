package com.fourtk.systemcell.services;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fourtk.systemcell.entities.User;
import com.fourtk.systemcell.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

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

package com.fourtk.systemcell.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fourtk.systemcell.entities.Resource;

public interface ResourceRepository extends JpaRepository<Resource, Long>{

}

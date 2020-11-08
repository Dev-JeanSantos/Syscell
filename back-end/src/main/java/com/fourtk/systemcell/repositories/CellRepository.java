package com.fourtk.systemcell.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fourtk.systemcell.entities.Cell;

public interface CellRepository extends JpaRepository<Cell, Long>{

}

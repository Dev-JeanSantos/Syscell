package com.fourtk.systemcell.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fourtk.systemcell.entities.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long>{

}

package com.example.demo.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Software;

@Repository
public interface SoftwareRepo extends JpaRepository<Software, Integer> {
	List<Software> findByNameContaining(String name);
	List<Software> findByRatings(String ratings);
}
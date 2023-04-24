package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Software;
import com.example.demo.repository.SoftwareRepo;
import com.example.demo.service.SoftwareServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")


public class SoftwareController {
    
	public SoftwareServiceImpl softServ;
	public SoftwareRepo softwareRepository;
	
	@Autowired
	public SoftwareController(SoftwareRepo softwareRepository,SoftwareServiceImpl softServ) {
		
		this.softwareRepository = softwareRepository;
		this.softServ = softServ;
	}
	
	@GetMapping("/softwares")
	public  ResponseEntity<List<Software>> getAllSoftwares(@RequestParam(required=false)String name){
		try {
			List<Software> softList = new ArrayList<Software>();
			if(name != null) {
				softwareRepository.findByNameContaining(name).forEach(softList::add);
				return new ResponseEntity<>(softList,HttpStatus.OK);
			}
			else {
				softList = softwareRepository.findAll();
				return new ResponseEntity<>(softList,HttpStatus.OK);
			}
		} catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@DeleteMapping("/softwares")
	public ResponseEntity<HttpStatus> deleteAllSoftwares(){
		try {
			softwareRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}

	@PostMapping("/softwares")
	public ResponseEntity<Software> saveSoftware(@RequestBody Software soft){
		return new ResponseEntity<Software>(softServ.saveSoftware(soft), HttpStatus.CREATED);
	}
	
	@PutMapping("/softwares/{id}")
	public ResponseEntity<Software> updateSoftwareDetailsById(@PathVariable("id") int softwareId,
			@RequestBody Software soft){
		return new ResponseEntity<Software>(softServ.updateSoftwareDetailsById(soft,softwareId ), HttpStatus.OK);
	}
	
	@GetMapping("/softwares/{id}")
	public ResponseEntity<Software>  getSoftwareById(@PathVariable("id")  int softwareId){
		return new ResponseEntity<Software>(softServ.getSoftwareById(softwareId), HttpStatus.OK);
	}
	
	@GetMapping("/softwares/fetchByRatings1")
	public ResponseEntity<List<Software>> findByName1() {
		try {
			List<Software> nameSoftList =softwareRepository.findByRatings("1");

			if (nameSoftList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(nameSoftList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@GetMapping("/softwares/fetchByRatings2")
	public ResponseEntity<List<Software>> findByName2() {
		try {
			List<Software> nameSoftList =softwareRepository.findByRatings("2");

			if (nameSoftList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(nameSoftList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@GetMapping("/softwares/fetchByRatings3")
	public ResponseEntity<List<Software>> findByName3() {
		try {
			List<Software> nameSoftList =softwareRepository.findByRatings("3");

			if (nameSoftList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(nameSoftList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@GetMapping("/softwares/fetchByRatings4")
	public ResponseEntity<List<Software>> findByName4() {
		try {
			List<Software> nameSoftList =softwareRepository.findByRatings("4");

			if (nameSoftList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(nameSoftList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@GetMapping("/softwares/fetchByRatings5")
	public ResponseEntity<List<Software>> findByName5() {
		try {
			List<Software> nameSoftList =softwareRepository.findByRatings("5");

			if (nameSoftList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(nameSoftList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	@DeleteMapping("/softwares/{id}")
	public ResponseEntity<String> deleteSoftwareById(@PathVariable("id")  int softwareId){
		 softServ.deleteSoftwareById(softwareId);
	    return new ResponseEntity<String>("deleted successfully", HttpStatus.OK);
	}
		
}




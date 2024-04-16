package br.edu.unichristus.backend.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unichristus.backend.data.dto.UserDTO;
import br.edu.unichristus.backend.data.dto.UserLowDTO;
import br.edu.unichristus.backend.data.model.User;
import br.edu.unichristus.backend.service.UserService;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping
	public UserLowDTO save(@RequestBody UserDTO user) {
		return service.save(user);
	}
	
	@PutMapping
	public UserLowDTO update(@RequestBody UserDTO user) {
		return service.save(user);
	}
	
	@GetMapping("/all")
	public List<UserLowDTO> listAll(){
		return service.listAll();
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
	
	@GetMapping
	public User findById(@RequestParam(required = true) Long id) {
		return service.findById(id);
	}
	
	

}

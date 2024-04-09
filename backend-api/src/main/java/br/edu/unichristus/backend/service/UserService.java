package br.edu.unichristus.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.edu.unichristus.backend.data.User;
import br.edu.unichristus.backend.exception.CommonsException;
import br.edu.unichristus.backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;

	public User save(User user) {
		if(user.getName().length() > 150) {
			throw new CommonsException(
					HttpStatus.BAD_REQUEST,
					"unichristus.backend.service.user.badrequest.exception",
					"Limite de caracteres excedido!"
					);
		}
		
		var userSaved = repository.save(user);
		
		return userSaved;
	}
	
	public List<User> listAll(){
		return repository.findAll();
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public User findById(Long id) {
		var user = repository.findById(id);
		if(user.isEmpty()) {
			System.out.println("Usuário n encontrado");
			return null;
		}
		return user.get();
	}

}

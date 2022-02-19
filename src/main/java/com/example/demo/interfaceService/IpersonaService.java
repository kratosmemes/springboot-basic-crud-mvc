package com.example.demo.interfaceService;

import java.util.Optional;

import com.example.demo.model.Persona;

import java.util.List;

public interface IpersonaService {
	public List<Persona> listar();
	public Optional<Persona> editarId(int id);
	public int save(Persona p);
	public void delete(int id);
}

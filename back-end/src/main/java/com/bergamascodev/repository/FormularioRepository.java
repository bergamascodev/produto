package com.bergamascodev.repository;

import com.bergamascodev.entity.Formulario;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class FormularioRepository implements PanacheRepositoryBase<Formulario, Long> {
}

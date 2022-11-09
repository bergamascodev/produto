package com.bergamascodev.repository;

import com.bergamascodev.entity.RegistroFormulario;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class RegistroFormularioRepository implements PanacheRepositoryBase<RegistroFormulario, Long> {
}

package com.bergamascodev.repository;

import com.bergamascodev.entity.Categoria;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CategoriaRepository implements PanacheRepositoryBase<Categoria, Long> {
}

package com.bergamascodev.repository;

import com.bergamascodev.entity.Pergunta;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class PerguntaRepository implements PanacheRepositoryBase<Pergunta, Long> {
}

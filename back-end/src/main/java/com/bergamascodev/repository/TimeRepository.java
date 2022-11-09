package com.bergamascodev.repository;

import com.bergamascodev.entity.Time;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TimeRepository implements PanacheRepositoryBase<Time, Long> {
}

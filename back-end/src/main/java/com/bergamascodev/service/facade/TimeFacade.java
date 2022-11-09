package com.bergamascodev.service.facade;

import com.bergamascodev.dto.TimeDto;
import com.bergamascodev.service.TimeService;
import io.quarkus.narayana.jta.runtime.TransactionConfiguration;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

@ApplicationScoped
public class TimeFacade {

    @Inject
    TimeService timeService;

    public TimeDto buscarPorId(Long id) {
        return timeService.buscarPorId(id);
    }

    @Transactional
    @TransactionConfiguration(timeout = 900)
    public TimeDto criar(TimeDto timeDto) {
        return timeService.criar(timeDto);
    }

    @Transactional
    @TransactionConfiguration(timeout = 900)
    public TimeDto alterar(Long id, TimeDto timeDto) {
        return timeService.alterar(id, timeDto);
    }
}

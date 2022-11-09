package com.bergamascodev.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "Registro_Formulario")
public class RegistroFormulario {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "native", strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "formularioId")
    private Formulario formulario;

    @ManyToOne
    @JoinColumn(name = "perguntaId")
    private Pergunta pergunta;
}

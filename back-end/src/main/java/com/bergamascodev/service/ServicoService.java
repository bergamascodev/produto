package com.bergamascodev.service;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ServicoService {

/*    @Inject
    ServicoRepository servicoRepository;

    @Inject
    ClienteRepository clienteRepository;

    @Inject
    ServicoConverter converter;

    @Inject
    ServicoValidator servicoValidator;

    @Inject
    ClienteService clienteService;

    public ServicoDto criar(ServicoDto servicoDto) {
        servicoValidator.validarServico(servicoDto);
        try {
            Servico servico = converter.toEntity(servicoDto);
            servicoRepository.persistAndFlush(servico);
            Cliente cliente = clienteRepository.findById(servico.getCliente().getId());
            servico.setCliente(cliente);
            return converter.toDto(servico);
        } catch (Exception exception) {
            throw gerarServicoException(MensagensErroEnum.FALHA_SALVAR);
        }
    }

    public ServicoDto alterar(Long id, ServicoDto servicoDto) {
        servicoValidator.validarServico(id, servicoDto);
        Servico servico = recuperarServico(id);
        try {
            atribuirValoresServico(servico, converter.toEntity(servicoDto));
            servicoRepository.persistAndFlush(servico);
            return converter.toDto(servico);
        } catch (Exception exception) {
            throw gerarServicoException(MensagensErroEnum.FALHA_SALVAR);
        }
    }

    public ServicoDto buscarPorId(Long id) {
        Optional<Servico> servicoOptional = servicoRepository.findByIdOptional(id);
        if(servicoOptional.isEmpty()){
            throw gerarServicoExcpetion(MensagensErroEnum.SERVICO_NAO_ENCONTRADO, ResponseEnum.REQUISICAO_INVALIDA);
        }
        return converter.toDtoFromOptionalEntity(servicoOptional);
    }

    private Servico recuperarServico(Long id) {
        Servico servico = servicoRepository.findById(id);
        if (servico == null) {
            throw gerarServicoExcpetion(MensagensErroEnum.CLIENTE_NAO_ENCONTRADO, ResponseEnum.REQUISICAO_INVALIDA);
        }
        return servico;
    }

    private Servico atribuirValoresServico(Servico servicoOriginal, Servico servicoAlterado) {
        Cliente cliente = clienteRepository.findById(servicoAlterado.getCliente().getId());
        servicoOriginal.setCliente(cliente);
        servicoOriginal.setDescricao(servicoAlterado.getDescricao());
        servicoOriginal.setValor(servicoAlterado.getValor());
        return servicoOriginal;
    }

    private BergamascoException gerarServicoException(MensagensErroEnum mensagensErroEnum) {
        return new BergamascoException(mensagensErroEnum.getCodigo(), mensagensErroEnum.getMensagem());
    }

    private BergamascoException gerarServicoExcpetion(MensagensErroEnum mensagensErroEnum, ResponseEnum responseStatus) {
        return new BergamascoException(mensagensErroEnum.getCodigo(), mensagensErroEnum.getMensagem(), responseStatus);
    }*/
}

# Processo de lançamento

## Antes de uma versão

### Uma semana antes do lançamento
- [ ] Anuncie a próxima versão criando uma nova issue uma semana antes da lançamento.
- [ ] Peça aos tradutores para traduzir novas frases.
- [ ] Na questão, prepare notas de lançamento:
  - [ ] A primeira seção seria um resumo de grandes alterações.
  - [ ] A segunda seção deve listar novas dependências, incluindo dependências python, e o motivo pelo qual elas foram adicionadas.
  - [ ] A terceira seção seria a lista de contribuições.

### 3 dias antes da liberação
- [ ] Desative as notas de lançamento (ou pelo menos a primeira seção).
- [ ] Atualize o número da versão de versão.
- [ ] Adiciona o conteúdo da primeira seção das notas de lançamento para os Dados dos Apps.
- [ ] Crie um novo branch para o lançamento com o nome de ser o número de lançamento e congelar novo recurso, fundir apenas em correções de bugs e atualizações de tradução.
- [ ] Crie uma compilação de teste de flathub (criando uma pull request no repositório do flathub, bater a tag do release nele e pedir para o buildbot do Flathub).
- [ ] Pedir aos colaboradores para testar a compilação. Qualquer erro identificado deve parar a atualização até que seja corrigido.

## Fazendo o lançamento
- [ ] Marcar o último commit do release branch com o número da versão.
- [ ] Criar uma nova versão do GitHub usando as notas de lançamento aprovadas.

## Depois do lançamento
- [ ] Atualize o pacote do flathub subindo a tag de liberação.
- [ ] Notificar os pacotes.
- [ ] Escrever um anúncio TWIG.

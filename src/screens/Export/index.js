import React from 'react';
import {
  Container,
  RadioButtonContainer,
  RadioButtonTitle,
  Content,
  Title,
  ButtonSubmit,
  ButtonText,
  Loading,
  RadioButton,
} from './styles';
import Header from '../../components/Header';

const Export = () => {
  const [value, setValue] = React.useState('first');

  return (
    <Container>
      <Header title="Exportação de Dados" withMenu></Header>
      <Content>
        <Title>Selecione Opção de exportação</Title>
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <RadioButtonContainer>
            <RadioButton value="Hoje" onPress={() => setChecked('first')} />
            <RadioButtonTitle>Hoje</RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton value="Ontem" onPress={() => setChecked('first')} />
            <RadioButtonTitle>Ontem</RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton
              value="Últimos 7 dias"
              onPress={() => setChecked('first')}
            />
            <RadioButtonTitle>Últimos 7 dias </RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton
              value="Últimos 15 dias"
              onPress={() => setChecked('first')}
            />
            <RadioButtonTitle>Últimos 15 dias </RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton
              value="Últimos 30 dias"
              onPress={() => setChecked('first')}
            />
            <RadioButtonTitle>Últimos 30 dias </RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton
              value="Intervalo"
              onPress={() => setChecked('first')}
            />
            <RadioButtonTitle>Intervalo </RadioButtonTitle>
          </RadioButtonContainer>
        </RadioButton.Group>
        <ButtonSubmit onPress={() => {}}>
          {false ? <Loading /> : <ButtonText> Exportar </ButtonText>}
        </ButtonSubmit>
      </Content>
    </Container>
  );
};

export default Export;

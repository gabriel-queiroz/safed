import React, { useState } from 'react';
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
  ContainerDatePicker,
  DatePickerContainer,
  DatePicker,
  DatePickerTitle,
  DatePickerValue,
} from './styles';
import Header from '../../components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { showMessage, Types } from '../../services/message';
import ExportService from '../../services/exportBarCode';
import queryString from 'query-string';
import dayjs from 'dayjs';

const Export = () => {
  const [value, setValue] = useState('first');
  const [dateInitial, setDateInitial] = useState(new Date());
  const [dateFinal, setDateFinal] = useState(new Date());
  const [isInitialDate, setIsInitialDate] = useState(true);
  const [mode, setMode] = useState('date');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      if (isInitialDate) {
        setDateInitial(selectedDate);
      } else {
        setDateFinal(selectedDate);
      }
    }
    setIsInitialDate(false);
  };

  const formatDate = (date) => {
    return dayjs(date).format('DD/MM/YYYY');
  };

  const handleOpenDatePicker = (isInitial) => {
    setIsInitialDate(isInitial);
    setShowDatePicker(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let data = value;
    if (value === 'interval') {
      data = `${value}?${queryString.stringify({
        start: dayjs(dateInitial).format(),
        end: dayjs(dateFinal).format(),
      })}`;
    }
    try {
      await ExportService.post(data);
      showMessage({
        message: 'Exportação realizada com suceso!',
        description: 'Em instantes você receberá o relatório em seu email!',
        type: Types.SUCCESS,
      });
      setLoading(false);
      setValue(true);
    } catch (error) {
      showMessage({
        message: 'Erro ao exportar dados!',
        type: Types.DANGER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header title="Exportação de Dados" withMenu></Header>
      <Content>
        <Title>Selecione Opção de exportação</Title>
        <RadioButton.Group
          onValueChange={(value) => {
            setValue(value);
            if (value === 'interval') {
              return setShowDatePicker(true);
            }
            return setShowDatePicker(false);
          }}
          value={value}
        >
          <RadioButtonContainer>
            <RadioButton value="today" />
            <RadioButtonTitle>Hoje</RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton value="yesterday" />
            <RadioButtonTitle>Ontem</RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton value="week" />
            <RadioButtonTitle>Últimos 7 dias </RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton value="Últimos 30 dias" />
            <RadioButtonTitle>Últimos 30 dias </RadioButtonTitle>
          </RadioButtonContainer>
          <RadioButtonContainer>
            <RadioButton value="interval" />
            <RadioButtonTitle>Intervalo </RadioButtonTitle>
          </RadioButtonContainer>
        </RadioButton.Group>
        {value === 'interval' && (
          <ContainerDatePicker>
            <DatePickerContainer>
              <DatePickerTitle>Data Inicial</DatePickerTitle>
              <DatePicker onPress={() => handleOpenDatePicker(true)}>
                <DatePickerValue>
                  {dateInitial ? formatDate(dateInitial) : 'Selecione a Data'}
                </DatePickerValue>
              </DatePicker>
            </DatePickerContainer>
            <DatePickerContainer>
              <DatePickerTitle>Data Final</DatePickerTitle>
              <DatePicker onPress={() => handleOpenDatePicker(false)}>
                <DatePickerValue>
                  {dateFinal ? formatDate(dateFinal) : 'Selecione a Data'}
                </DatePickerValue>
              </DatePicker>
            </DatePickerContainer>
          </ContainerDatePicker>
        )}

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={isInitialDate ? dateInitial : dateFinal}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <ButtonSubmit onPress={handleSubmit}>
          {loading ? <Loading /> : <ButtonText> Exportar </ButtonText>}
        </ButtonSubmit>
      </Content>
    </Container>
  );
};

export default Export;

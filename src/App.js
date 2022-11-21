import Input from './components/input'
import Button from './components/button'

import { Container, Content, Row } from "./styles";
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState();
  
  const clear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  
  const addNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const sumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const minusNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const multNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const divNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const percentNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    } else {
      switch(operation) {
        case '+':
          const sum = (Number(currentNumber) * Number(firstNumber) / 100) + Number(firstNumber)
          setCurrentNumber(String(sum))
          setOperation('')
          break
        case '-':
          const min = (Number(currentNumber) * Number(firstNumber) / 100) - Number(firstNumber)
          setCurrentNumber(String(min))
          setOperation('')
          break
        case '*':
          const mult = (Number(currentNumber) * Number(firstNumber) / 100)
          setCurrentNumber(String(mult))
          setOperation('')
          break
          case '/':
            const div = (Number(firstNumber) * 100) / Number(currentNumber)
            setCurrentNumber(String(div))
            setOperation('')
            break
        default:
          break

      }
    }
  }

  const equals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
        case '+':
          sumNumber()
          break;
        case '-':
          minusNumber()
          break;
        case '*':
          multNumber()
          break;
        case '/':
          divNumber()
          break;
        case '%':
          percentNumber()
          break;
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={clear}/>
          <Button label="(" onClick={() => addNumber('(')} />
          <Button label=")" onClick={() => addNumber(')')} />
          <Button label="/" onClick={divNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => addNumber('7')} />
          <Button label="8" onClick={() => addNumber('8')} />
          <Button label="9" onClick={() => addNumber('9')} />
          <Button label="x" onClick={multNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => addNumber('4')} />
          <Button label="5" onClick={() => addNumber('5')} />
          <Button label="6" onClick={() => addNumber('6')} />
          <Button label="-" onClick={minusNumber} />
        </Row>
        <Row>
          <Button label="1" onClick={() => addNumber('1')} />
          <Button label="2" onClick={() => addNumber('2')} />
          <Button label="3" onClick={() => addNumber('3')} />
          <Button label="+" onClick={sumNumber} />
        </Row>
        <Row>
          <Button label="0" onClick={() => addNumber('0')} />
          <Button label="." onClick={() => addNumber('.')} />
          <Button label="%" onClick={percentNumber} />
          <Button label="=" onClick={equals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

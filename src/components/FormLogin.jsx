import Button from './Button';
import Input from './Input';
import { validateForm } from '../utils/validation';
import styles from '../styles/stylesForm.css';
import React, { useState } from 'react'

const FormLogin = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const hadleInputChage = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const erros = validateForm(formValue);

        if(erros.length > 0){
            alert(erros.join('\n'));
        } else {
            try {
               const response = await loginUser(formValue); // chamaria da API
               console.log('Resposta da API:', response.data);
               alert('Login realizado com sucesso!');
            } catch (error) {
                console.error('Erro na Requisição:', error);
                alert('Erro ao realizar login, tente novamente.');
            }
        }
    }
  return (
   <form onSubmit={handleSubmit} className={styles.form}>
    <div>
        <Input
           type="email"
           name="email"
           value={formValue.email}
           onChage={hadleInputChage}
           placeholder="digite seu email"
           required
        />
    </div>
    <div>
        <Input 
           type="password"
           name="password"
           value={formValue.password}
           onChage={hadleInputChage}
           placeholder="Digite sua senha"
           required
        />
    </div>
    <Button type="submit">Entrar</Button>
   </form>
  );
};

export default FormLogin;
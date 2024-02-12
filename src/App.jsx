import  { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Logo from './components/Logo';

const firebaseConfig = {
  apiKey: "AIzaSyBJPFTViKCWj7cTnlb3HM5OvoDyvh3PiZM",
  authDomain: "barber-shop-a8f4c.firebaseapp.com",
  projectId: "barber-shop-a8f4c",
  storageBucket: "barber-shop-a8f4c.appspot.com",
  messagingSenderId: "1071145801161",
  appId: "1:1071145801161:web:8287b6ebfc7ac1567d0418",
  measurementId: "G-M543NSFDSZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const agendamentosCol = collection(db, 'agendamento');
      const snapshot = await getDocs(agendamentosCol);
      const agendamentosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAgendamentos(agendamentosData);
    };

    fetchAgendamentos();
  }, []);

  return (
    <>
      <Logo />
      
      <div>
        <h1>Agendamentos de Atendimentos</h1>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Telefone</th>
              {}
            </tr>
          </thead>
          <tbody>
            {agendamentos.map(agendamento => (
              <tr key={agendamento.id}>
                <td>{agendamento.cliente}</td>
                <td>{agendamento.data}</td>
                <td>{agendamento.horario}</td>
                <td>{agendamento.telefone}</td>
                {}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

import { emailsList } from './emails';
import './App.css';

function App() {
  // Estado inicial do componente
  const [ emails, setEmails ] = useState(emailsList);

  // Variáveis para auxílio de autocomplete do switch / case
  const READ_ALL = 'READ_ALL';
  const UNREAD_ALL = 'UNREAD_ALL';
  const READ_EMAIL = 'READ_EMAIL';
  const UNREAD_EMAIL = 'UNREAD_EMAIL';

  // Função que exibe um alert para quando todos os emails forem lidos (componentDidUpdate)
  useEffect(() => {
    emails.every((email) => email.status) && alert('Você leu todos os emails!')
  }, [emails]);

  // Função que verifica e executa alterações de status na lista de emails
  function handleReadOrUnreadEmail(action, id) {
    switch(action) {
      case READ_ALL:
        const read = emails.map((email) => ({ ...email, status: 1 }));
        return setEmails(read);

      case UNREAD_ALL:
        const unread = emails.map((email) => ({ ...email, status: 0 }));
        return setEmails(unread);

      case READ_EMAIL:
        const updateWithRead = emails.map((email) => (
          email.id === id ? ({ ...email, status: 1 }) : email
        ));
        return setEmails(updateWithRead);

      case UNREAD_EMAIL:
        const updateWithUnread = emails.map((email) => (
          email.id === id ? ({ ...email, status: 0 }) : email
        ));
        return setEmails(updateWithUnread);

      default:
        return setEmails(emails);
    }
  }

  return (
    <section className="App">
      <h1>TrybeMail</h1>

      <button
        onClick={ () => handleReadOrUnreadEmail(READ_ALL) }
      >
        Marcar todas como lida
      </button>

      <button
        onClick={ () => handleReadOrUnreadEmail(UNREAD_ALL) }
      >
        Marcar todas como não lida
      </button>

      <ul>
        { emails.map(({ id, title, status }) => (
          <li key={ id }>
            <p>
              { `${title} ${status ? '(Lido)' : '(Não lido)'}` }
            </p>

            { status ? (
            <button
              onClick={ () => handleReadOrUnreadEmail(UNREAD_EMAIL, id) }
            >
              Marcar como não lido
            </button>
            ) : (
            <button
              onClick={ () => handleReadOrUnreadEmail(READ_EMAIL, id) }
            >
              Marcar como lido
            </button>
            ) }
          </li>
        )) }
      </ul>
    </section>
  );
}

export default App;

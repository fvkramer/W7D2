const fetchTodos = () => (
  $.ajax({
      method: 'GET',
      url: 'api/todos'
  })
);

const createTodos = () => (
  $.ajax({
      method: 'POST',
      url: 'api/todos'
  })
);

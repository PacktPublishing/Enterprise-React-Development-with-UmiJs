////////////////////////////

// Style 1 - No parentheses
a && b || c && d ? <div>...</div> : null

// Style 2 - With parentheses
(a && b) || (c && d) ? <div>...</div> : null;

////////////////////////////

function execute(param1, param2, param3) {
  return arg1 + arg2 + arg3;
}

execute(arg1, arg2, arg3);

////////////////////////////

// Style 1 - Hug paren
execute(
  arg1, 
  arg2, 
  arg3);

// Style 2 - Align paren
execute(arg1, 
  arg2, 
  arg3);

// Style 3 - Inner arguments
execute(
  arg1, 
  arg2, 
  arg3
);

////////////////////////////

// Style 1 - Break inner function
execute(execute(
  arg1, 
  arg2, 
  arg3), arg2, arg3);

// Style 2 - Break out function
execute(
  execute(arg1, arg2, arg3), 
  arg2, 
  arg3
);

// Style 2 - Break both functions
execute(
  execute(
    arg1, 
    arg2, 
    arg3
  ), 
  arg2, 
  arg3
);


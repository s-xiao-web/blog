const tools = {
  formatResult(result) {
    return Number(result)? 'success' : {code: 1, data: 'throw error', message: 'error'};
  }
};

export = tools;
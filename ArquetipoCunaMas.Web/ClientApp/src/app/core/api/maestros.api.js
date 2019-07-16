export const FetchDependencias = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          dependencias: [
            { value: 1, label: "dependencia 1" },
            { value: 2, label: "dependencia 2" },
            { value: 3, label: "dependencia 3" },
            { value: 4, label: "dependencia 4" }
          ]
        }
      });
    }, 600);
  });
};

export const FetchAbogados = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          abogados: [
            { value: 1, label: "abogado 1" },
            { value: 2, label: "abogado 2" },
            { value: 3, label: "abogado 3" }
          ]
        }
      });
    }, 500);
  });
};

export const FetchEstadosExpediente = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          estados: [
            { value: 1, label: "estado 1" },
            { value: 2, label: "estado 2" },
            { value: 3, label: "estado 3" }
          ]
        }
      });
    }, 700);
  });
};

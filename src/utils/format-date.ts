export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pr-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};

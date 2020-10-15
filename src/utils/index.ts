export const parseDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toLocaleString('pt-BR');
  }
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

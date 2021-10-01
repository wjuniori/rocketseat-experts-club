interface UsePrintAction {
  printIt: () => void
}

export const usePrintAction = (): UsePrintAction => {
  const printIt = (): void => window.print();

  return { printIt }
}
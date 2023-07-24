/**
 * A interface DiscountStrategy define o contrato para as estratégias de 
 * cálculo de desconto, e as classes PercentDiscountStrategy e FixedDiscountStrategy 
 * implementam essa interface com as lógicas específicas para calcular 
 * os descontos percentual e fixo, respectivamente.
 * A classe DiscountCalculatorOcp utiliza a injeção de dependência para 
 * receber uma estratégia de desconto no construtor. Isso permite que 
 * diferentes estratégias sejam injetadas na classe sem a necessidade de 
 * modificar seu código interno. Dessa forma, o código segue o Princípio 
 * do Aberto/Fechado, sendo aberto para extensão (adicionar novas estratégias) 
 * e fechado para modificação (não é necessário alterar a classe 
 * DiscountCalculator quando novas estratégias são adicionadas).
 * */ 


interface DiscountStrategy {
  calculateDiscount(order: Order): number;
}

class PercentDiscountStrategy implements DiscountStrategy {
  calculateDiscount(order: Order): number {
    return order.total * 0.1;
  }
}

class FixedDiscountStrategy implements DiscountStrategy {
  calculateDiscount(order: Order): number {
    return 50;
  }
}

class DiscountCalculatorOcp {
  private discountStrategy: DiscountStrategy;

  constructor(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  calculateDiscount(order: Order): number {
    return this.discountStrategy.calculateDiscount(order);
  }
}

interface Order {
  total: number;
}

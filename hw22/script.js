function belong(x, y, R){
    return Math.sqrt(x**2 + y**2) <= R ? 'Belong' : 'Next time'
}

belong(4, 13, 15)
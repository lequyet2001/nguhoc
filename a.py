def find_expressions(numbers, target, expression=''):
    if not numbers and eval(expression) == target:
        print(expression)
    for i in range(1, len(numbers) + 1):
        find_expressions(numbers[i:], target, expression + numbers[:i])
        find_expressions(numbers[i:], target, expression + '+' + numbers[:i])
        find_expressions(numbers[i:], target, expression + '-' + numbers[:i])

find_expressions('123456789', 0)

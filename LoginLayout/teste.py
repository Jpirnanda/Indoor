import json

'{"X": "value1", "Y": "value2", "Z": [{"A": "value3", "B": "value4"}]}'

a = '{"id": "1","title": "Corolla 0km","dataInicial": "2023-03-10","dataFinal": "2023-03-15","png": "raldo"}'



teste2 = {
    "id": 2,
    "title": 'Corolla 0km',
    "dataInicial": '2023-03-10',
    "dataFinal": '2023-03-15',
    "png": "raldo"
}


b = json.loads(a)

print(type(b))
print(b)



# markedDates={{ '2023-03-14': { periods: [{ startingDay: true, endingDay: false, color: '#f0e68c' }, { color: 'transparent' },] } }}


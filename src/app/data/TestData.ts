import {Category} from '../model/Category';
import {Task} from '../model/Task';
import { Priority } from '../model/Priority';

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Job'},
        {id: 2, title: 'Family'},
        {id: 3, title: 'Study'},
        {id: 4, title: 'Rest'},
        {id: 5, title: 'Sport'},
        {id: 6, title: 'Food'},
        {id: 7, title: 'Finance'},
        {id: 8, title: 'Gadgets'},
        {id: 9, title: 'Health'},
        {id: 10, title: 'Car'}
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'Low', color: '#e5e5e5'},
        {id: 2, title: 'Mediud', color: '#85D1B2'},
        {id: 3, title: 'High', color: '#F1828D'},
        {id: 4, title: 'Critical', color: '#F1128D'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Fill the gasoline',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[9],
            date: new Date('2021-02-10')
        },
        {
            id: 2,
            title: 'Submit reports to the head of department',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2021-04-11')
        },
        {
            id: 3,
            title: 'Clean up my room, water the plants',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[1]
        },
        {
            id: 4,
            title: 'Go to the park with your family, invite friends',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2021-02-17')
        },
        {
            id: 5,
            title: 'Find and learn a quantum physics textbook',
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 6,
            title: 'Go to a programming seminar',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-06-11')
        },

        {
            id: 7,
            title: 'Find tickets to Turkey, choose a hotel ',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[3]
        },
        {
            id: 8,
            title: 'Prepare dinner for the whole family (salmon with potatoes)',
            completed: false,
            category: TestData.categories[5]
        },
        {
            id: 9,
            title: 'Подтянуться 10 раз',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-12')
        },
        {
            id: 10,
            title: 'Пробежать 100 м',
            priority: TestData.priorities[0],
            completed: true,
            category: TestData.categories[4]
        },

        {
            id: 11,
            title: 'Организовать детский праздник ',
            completed: false
        },

        {
            id: 12,
            title: 'Сходить на лекцию "Как научиться программировать на Java"',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[2]
        },
        {
            id: 13,
            title: 'Купить продукты на неделю',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2019-05-11')
        },

        {
            id: 14,
            title: 'Провести собрание по поводу всех проектов',
            completed: true,
            category: TestData.categories[0]
        },

        {
            id: 15,
            title: 'Сдать экзамен по Java',
            priority: TestData.priorities[2],
            completed: true
        },


        {
            id: 16,
            title: 'Положить 100 000 р в банк на депозит',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 17,
            title: 'Попросить аванс на работе',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[6]
        },

        {
            id: 18,
            title: 'Сдать анализы, проверить гемоглобин',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[8],
            date: new Date('2020-12-11')

        },

        {
            id: 19,
            title: 'Сравнить новый айпад с самсунгом',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-10-11')

        },

        {
            id: 20,
            title: 'Футбол с сотрудниками',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-03-17')

        }

    ];
}
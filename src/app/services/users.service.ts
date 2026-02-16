import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaritalStatus } from "../enums/marital-status.enum";
import { PhoneType } from "../enums/phone-type.enums";
import { AnddressType } from "../enums/anddress-type.enums";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly usersList: any[] = [
        {
            name: 'Fulano',
            email: 'fulano@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.SINGLE, // -> Estado Civil // -> Solteiro
            monthlyIncome: 5000, // -> Renda Mensal
            birthDate: '25/02/1991',
            phoneList: [
                {
                    type: PhoneType.RESIDENTIAL, // -> Residencial
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '1234-5678', // -> Número
                },
                {
                    type: PhoneType.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-2222', // -> Número
                },
                {
                     type: PhoneType.EMERGENCY, // -> Emergência
                     areaCode: '11', // -> DDD
                     internationalCode: '+55', // -> DDI
                     number: '93333-4444', // -> Número
                },
            ],
            addressList: [
                {
                    type: AnddressType.RESIDENTIAL, // -> Residencial
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                     type: AnddressType.WORK, // -> Trabalho
                     street: 'Avenida de Tal',
                     complement: 'Próximo ao centro comercial',
                     country: 'Brazil',
                     state: 'São Paulo',
                     city: 'Santos',
                },
                {
                    type: AnddressType.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.MARRIED, // -> Estado Civil // -> Casada
            monthlyIncome: 6000, // -> Renda Mensal
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneType.EMERGENCY, // -> Emergência
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AnddressType.WORK, // -> Trabalho
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                }
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatus.DIVORCED, // -> Estado Civil // -> Divorciado
            monthlyIncome: 7000, // -> Renda Mensal
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type: PhoneType.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AnddressType.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        }
    ];

    getUsers() {
        return new Observable((observer) => { 
            setTimeout(()=>{
                observer.next(this.usersList)
            },500);
        })
    }
}

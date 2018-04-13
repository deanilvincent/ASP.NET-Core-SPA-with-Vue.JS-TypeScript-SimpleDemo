import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component

export default class Fruit extends Vue {
    fruitName: string = "Apple";

    fruits = [{
            id: 0,
            name: 'Mango',
            price: 100
        },
        {
            id: 1,
            name: 'Apple',
            price: 200
        },
        {
            id: 2,
            name: 'Orange',
            price: 300
        }];
}
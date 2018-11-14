// Core
import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

// Instruments
import Styles from './styles.m.css';
// import { tasks } from './tasks';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tasksActions } from '../../bus/tasks/actions';

import { Form, Control, actions as actionForm } from 'react-redux-form';

// Components
import Task from '../Task';
import Checkbox from '../../theme/assets/Checkbox';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.sortBy(item => !item.get('favorite')).sortBy(item => item.get('completed')),
        filter: state.forms.filter
    };
};

const mapDispatchToProp = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...tasksActions,
            reset: actionForm.reset
        }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProp
)
export default class Scheduler extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchTasksAsync();
    }

    _submitNewTask = (task) => {
        const { actions } = this.props;
        const message = task.message;

        if (message.length) {
            actions.createTaskAsync(message);
            actions.reset('forms.newTask.message');
        }
    }

    _completeAllTasksAsync = () => {
        const { actions: { completeAllTasksAsync }, tasks } = this.props;
        if (!this._allTasksCompleted()) {
            const incompletedTasks = tasks.filter((task) => task.get('completed') === false)
                .map((item) => {
                    return item.set('completed', true).delete('modified').delete('created');
                });

            completeAllTasksAsync(incompletedTasks);
        }

        return null;
    }

    _allTasksCompleted = () => {
        const { tasks } = this.props;

        return tasks.every((task) => task.get('completed') === true);
    }

    render () {
        const { tasks, actions, filter } = this.props;
        const filteredTasks = tasks.filter((task) => task.get('message').toLowerCase().includes(filter));

        const todoList = filteredTasks.map((task) => (
            <Task
                completed = { task.get('completed') }
                favorite = { task.get('favorite') }
                id = { task.get('id') }
                key = { task.get('id') }
                message = { task.get('message') }
                actions = { actions }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                            <Control.text
                                id = 'message'
                                name = 'message'
                                className = { Styles.createTask }
                                model = 'forms.filter'
                                placeholder = 'Поиск'
                            />
                    </header>
                    <section>
                        <Form model = 'forms.newTask' onSubmit = { this._submitNewTask }>
                            <Control.text
                                id = 'message'
                                name = 'message'
                                className = { Styles.createTask }
                                model = 'forms.newTask.message'
                                maxLength = { 50 }
                                placeholder = 'Описание моей новой задачи'
                            />

                            <button>Добавить задачу</button>
                        </Form>
                        <div className = { Styles.overlay }>
                            <ul>
                                <FlipMove duration = { 400 }>{todoList}</FlipMove>
                            </ul>
                        </div>
                    </section>
                    <footer>
                        <Checkbox checked = { this._allTasksCompleted() }
                                  onClick = { this._completeAllTasksAsync }
                                  color1 = '#363636'
                                  color2 = '#fff' />
                        <span className = { Styles.completeAllTasks }>
                            Все задачи выполнены
                        </span>
                    </footer>
                </main>
            </section>
        );
    }
}

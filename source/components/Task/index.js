// Core
import React, { PureComponent } from 'react';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import Edit from '../../theme/assets/Edit';
import Star from '../../theme/assets/Star';

export default class Task extends PureComponent {
    state = {
        isTaskEditing: false,
        newMessage: this.props.message
    };

    _getTaskShape = ({
         id = this.props.id,
         completed = this.props.completed,
         favorite = this.props.favorite,
         message = this.props.message,
     }) => ({
        id,
        completed,
        favorite,
        message,
    });

    taskInput = React.createRef();

    _removeTask = () => {
        const { actions, id } = this.props;

        actions.removeTaskAsync(id);
    };

    _toggleCompleteTask = () => {
        const { completed } = this.props;

        completed ? this._incompleteTask() : this._completeTask();
    };

    _completeTask = () => {
        const { actions, id, message, favorite } = this.props;

        actions.completeTaskAsync({
            id,
            message,
            completed: true,
            favorite,
        });
    };

    _incompleteTask = () => {
        const { actions, id, message, favorite } = this.props;

        actions.incompleteTaskAsync({
            id,
            message,
            completed: false,
            favorite,
        });
    };

    _favotireTask = () => {
        const { actions, id, message, completed } = this.props;

        actions.favoriteTaskAsync({
            id,
            message,
            completed,
            favorite: true,
        });
    };

    _unfavoriteTask = () => {
        const { actions, id, message, completed } = this.props;

        actions.unfavoriteTaskAsync({
            id,
            message,
            completed,
            favorite: false,
        });
    };

    _updateNewTaskMessage = (e) => {
        const { value: newMessage } = e.target;

        if (newMessage.length <= 50) {
            this.setState({ newMessage });
        }

        return null;
    };

    _toggleFavoriteTask = () => {
        const { favorite } = this.props;

        favorite ? this._unfavoriteTask() : this._favotireTask();
    };

    _updateMessage = () => {
        const { actions, message } = this.props;
        const { newMessage } = this.state;

        if (message !== newMessage) {
            actions.updateMessageAsync(this._getTaskShape({
                message: newMessage,
            }));
        }
        this._setTaskEditingState(false);
    };

    _setTaskEditingState = (isTaskEditing = true) => {
        this.taskInput.current.disabled = !isTaskEditing;

        if (isTaskEditing) {
            this.taskInput.current.focus();
        }

        this.setState({
            isTaskEditing,
        });
    };

    _updateTaskMessageOnClick = () => {
        const { isTaskEditing } = this.state;

        if (isTaskEditing) {
            this._updateMessage();

            return null;
        }

        this._setTaskEditingState(true);
    };

    _updateTaskMessageOnKeyDown = (e) => {
        const { newMessage } = this.state;
        const enterKey = e.key === "Enter";
        const escapeKey = e.key === "Escape";

        if (!newMessage) {
            return null;
        }

        if (enterKey) {
            this._updateMessage();
        }

        if (escapeKey) {
            this._cancelUpdatingTaskMessage();
        }
    };

    _cancelUpdatingTaskMessage = () => {
        const { message: newMessage } = this.props;

        this._setTaskEditingState(false);

        this.setState({
            newMessage,
        });
    };


    render () {
        const { message, completed, favorite } = this.props;
        const { isTaskEditing, newMessage } = this.state;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        inlineBlock
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this._toggleCompleteTask }
                    />
                    <input disabled
                           maxLength = { 50 }
                           ref = { this.taskInput }
                           onChange = { this._updateNewTaskMessage }
                           onKeyDown = { this._updateTaskMessageOnKeyDown }
                           type = 'text'
                           value = { newMessage } />
                </div>
                <div className = { Styles.actions }>
                    <Star
                        inlineBlock
                        checked = { favorite }
                        className = { Styles.toggleTaskFavoriteState }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._toggleFavoriteTask }
                    />
                    <Edit
                        inlineBlock
                        checked = { isTaskEditing }
                        className = { Styles.updateTaskMessageOnClick }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._updateTaskMessageOnClick }
                    />
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this._removeTask }
                    />
                </div>
            </li>
        );
    }
}

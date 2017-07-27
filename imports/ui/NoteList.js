import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import {Session} from 'meteor/session';

import {Notes} from '../api/notes';

export const NoteList = (props) => {
  const renderList = (notes) => {
    return notes.map((note) => {
      return (
        <NoteListItem key={note._id} note={note}/>
      );
    });
  };
  return (
    <div>
      <NoteListHeader/>
      {props.notes.length === 0 ? <NoteListEmptyItem/> : undefined}
      {renderList(props.notes)}
    </div>
  );
};

NoteList.propTypes = {
  notes: React.PropTypes.array.isRequired
};

export default createContainer(() => {
const selectedNoteId = Session.get('selectedNoteId');

  Meteor.subscribe('notes');
  return {
    notes: Notes.find({}, {sort: {updatedAt: -1}}).fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId
      };
    })
  };
}, NoteList);

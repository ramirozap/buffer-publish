import React from 'react';
import {
  action,
  linkTo,
  storiesOf,
} from '@storybook/react';
import { checkA11y } from 'storybook-addon-a11y';
import DraftFooter from './index';

const draftDetails = {
  userName: 'Ash',
  avatarUrl: 'https://buffer-uploads.s3.amazonaws.com/510521020a19000b6a00001e/a476fed03b1de4e06563d6063d7d3ee0.jpg',
  email: 'ash@buffer.com',
  via: 'web',
  createdAt: 'March 2nd at 12:45pm (GMT)',
  postAction: 'This post will be added to the queue',
};

const draftDetailsPastDue = {
  ...draftDetails,
  postAction: 'This post was scheduled for March 12 at 9:42pm (GMT)',
};

const draftDetailsScheduled = {
  ...draftDetails,
  postAction: 'This post is scheduled for 9:42pm (GMT)',
};

const draftsView = 'drafts';
const approvalView = 'approval';
const scheduledAt = 1495553578;

storiesOf('DraftFooter', module)
  .addDecorator(checkA11y)
  .add('drafts view: manager - scheduled post', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={linkTo('DraftFooter', 'drafts view: managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetailsScheduled}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('drafts view: manager', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={linkTo('DraftFooter', 'drafts view: managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: manager past due', () => (
    <DraftFooter
      hasPermission
      isPastDue
      manager
      onApproveClick={linkTo('DraftFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager', () => (
    <DraftFooter
      hasPermission
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager past due', () => (
    <DraftFooter
      hasPermission
      isPastDue
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetailsPastDue}
      scheduledAt={scheduledAt}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager, no permission', () => (
    <DraftFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('drafts view: not manager past due, no permission', () => (
    <DraftFooter
      hasPermission={false}
      isPastDue
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ))
  .add('approval view: manager', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={linkTo('DraftFooter', 'approval view: managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={linkTo('DraftFooter', 'approval view: manager moving to drafts')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: manager past due', () => (
    <DraftFooter
      hasPermission
      isPastDue
      manager
      onApproveClick={linkTo('DraftFooter', 'managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      draftDetails={draftDetailsPastDue}
      scheduledAt={scheduledAt}
      view={approvalView}
    />
  ))
  .add('approval view: not a manager', () => (
    <DraftFooter
      hasPermission
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={linkTo('DraftFooter', 'approval view: not manager moving to drafts')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: not a manager past due', () => (
    <DraftFooter
      hasPermission
      isPastDue
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onRescheduleClick={action('reschedule-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: not manager, no permission', () => (
    <DraftFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: manager moving to drafts', () => (
    <DraftFooter
      hasPermission
      isMoving
      isWorking
      manager
      onApproveClick={linkTo('DraftFooter', 'approval view: managerIsApproving')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'managerIsDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('approval view: not manager moving to drafts', () => (
    <DraftFooter
      hasPermission
      isMoving
      isWorking
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      onMoveToDraftsClick={action('move-to-drafts-click')}
      onRequestApprovalClick={linkTo('DraftFooter', 'drafts view: isWorking')}
      draftDetails={draftDetails}
      view={approvalView}
    />
  ))
  .add('isConfirmingDelete', () => (
    <DraftFooter
      hasPermission
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
      view={draftsView}
    />
  ))
  .add('managerIsConfirmingDelete', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isConfirmingDelete
      view={draftsView}
    />
  ))
  .add('isDeleting', () => (
    <DraftFooter
      hasPermission
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isDeleting
      view={draftsView}
    />
  ))
  .add('drafts view: managerIsApproving', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={draftsView}
    />
  ))
  .add('approval view: managerIsApproving', () => (
    <DraftFooter
      hasPermission
      manager
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={approvalView}
    />
  ))
  .add('drafts view: isWorking', () => (
    <DraftFooter
      hasPermission
      onApproveClick={action('approve-click')}
      onDeleteClick={linkTo('DraftFooter', 'managerIsConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onCancelConfirmClick={linkTo('DraftFooter', 'manager')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      isWorking
      view={draftsView}
    />
  ))
  .add('no permission', () => (
    <DraftFooter
      hasPermission={false}
      onCancelConfirmClick={linkTo('DraftFooter', 'default')}
      onDeleteClick={linkTo('DraftFooter', 'isConfirmingDelete')}
      onDeleteConfirmClick={linkTo('DraftFooter', 'isDeleting')}
      onEditClick={action('edit-click')}
      draftDetails={draftDetails}
      view={draftsView}
    />
  ));

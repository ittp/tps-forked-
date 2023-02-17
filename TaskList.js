import { useState } from "react";
import { Row, Col, Card, Form, Button, Input, Drawer, Checkbox } from "antd";
import { List } from "antd/es/form/Form";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [button, switchButton] = useState(false);

  let buttonMode = {
    view: "Edit",
    edit: "Save"
  };

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        {/* <Button onClick={() => setIsEditing(true)}>Edit</Button> */}
      </>
    );
  }
  return (
    <Card
      onDoubleClick={(e) => {
        onChange({
          ...task,
          done: e.target.checked
        });
      }}
      title={
        <Checkbox
          type="checkbox"
          label={"Done"}
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
      }
      size={"lg"}
      hoverable
      extra={task.text}
      id={task.id}
      contentEditable
      bordered
    >
      <Row gutter={32}>
        <Col span={2}></Col>
        <Col flex={1}> {taskContent} </Col>
        <Col>
          <Button
            type={"dashed"}
            shape={"round"}
            color={"danger"}
            onClick={() => onDelete(task.id)}
          >
            {taskContent}
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

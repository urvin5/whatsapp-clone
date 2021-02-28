import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import { Contacts } from "./Contacts";
import { Conversation } from "./Conversation";
import { NewContactModal } from "./NewContactModal";
import { NewConversationModal } from "./NewConversationModal";

const CONVERSATION = "conversation";
const CONTACTS = "contacts";
export const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSATION);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const conversationOpen = activeKey === CONVERSATION;
  return (
    <div className="d-flex flex-column" style={{ width: "250px" }}>
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION}>{CONVERSATION}</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setActiveKey(CONTACTS)}>
            <Nav.Link eventKey={CONTACTS}>{CONTACTS}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="overflow-auto border-right flex-grow-1">
          <Tab.Pane eventKey={CONVERSATION}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <div className="p-2 border-top border-right small">
        your id: <span className="text-muted">{id}</span>
      </div>
      <Button className="rounded">
        New {conversationOpen ? "Conversation" : "Contact"}
      </Button>
      <Modal
        show={isModalOpen}
        onHide={() => {
          setIsModalOpen(false);
        }}
      >
        {conversationOpen ? <NewConversationModal /> : <NewContactModal />}
      </Modal>
    </div>
  );
};

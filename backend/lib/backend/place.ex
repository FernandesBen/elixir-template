defmodule Backend.Place do
  use TypedStruct

  typedstruct do
    field :id, integer(), required: true
    field :name, String.t(), required: true
    field :location, String.t(), default: "Earth"
  end

  def new(attrs) do
    {:ok, struct(__MODULE__, attrs)}
  end
end
#{:ok, user} = Place.new(%{id: 1, name: "Portugal", location: "Europe"})
